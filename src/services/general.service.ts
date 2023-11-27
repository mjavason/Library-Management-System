import { Model, Document } from 'mongoose';

export class GeneralService<T extends Document> {
  private DBModel: Model<T>;

  constructor(model: Model<T>) {
    this.DBModel = model;
  }

  create = async (body: T): Promise<T> => {
    return await this.DBModel.create(body);
  };

  getAll = async (pagination: number, searchDetails: object = {}): Promise<T[]> => {
    return await this.DBModel.find(searchDetails)
      .limit(10)
      .skip(pagination)
      .sort({ createdAt: 'desc' })
      .select('-__v');
  };

  update = async (searchDetails: object, update: object): Promise<T> => {
    return await this.DBModel.findOneAndUpdate({ ...searchDetails }, update, {
      new: true,
    }).select('-__v');
  };

  getCount = async (searchData: object) => {
    return await this.DBModel.countDocuments({ ...searchData });
  };

  find = async (searchData: object): Promise<T[]> => {
    return await this.DBModel.find({ ...searchData }).select('-__v');
  };

  findOne = async (searchData: object): Promise<T> => {
    return this.DBModel.findOne({ ...searchData }).select('-__v');
  };

  softDelete = async (searchParams: object): Promise<T> => {
    return await this.DBModel.findOneAndUpdate(
      { ...searchParams, deleted: false },
      { deleted: true },
      {
        new: true,
      },
    ).select('-__v');
  };

  hardDelete = async (searchParams: object): Promise<T> => {
    return await this.DBModel.findOneAndDelete(searchParams).select('-__v');
  };

  exists = async (searchParams: object) => {
    return await this.DBModel.exists({ ...searchParams });
  };
}
