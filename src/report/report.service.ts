import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import {Report} from './entities/report.entity'

@Injectable()
export class ReportService {
  async create(createReportDto: CreateReportDto) {
    const createReport = new Report();
    createReport.BusinessName= createReportDto.BusinessName;
    createReport.Income = createReportDto.Income
    createReport.OutCome= createReportDto.OutCome
    const data = await createReport.save();
    return {
      message:'report created well',
      data:data
    }
  }

  async findAll() {
    return await Report.find();
  }

  async findOne(id: number) {
    return await Report.findOne(id);
  }

  async update(id: number, updateReportDto: UpdateReportDto) {
    return await Report.update(id, updateReportDto);
  }

  async remove(id: number) {
    return  await Report.delete(id);
  }
}
