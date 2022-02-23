import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import {Transaction} from './entities/transaction.entity'

@Injectable()
export class TransactionService {
  async create(createTransactionDto: CreateTransactionDto) {
    const createTransaction = new Transaction();
    createTransaction.Name= createTransactionDto.Name;
    createTransaction.service = createTransactionDto.service
    createTransactionDto.Amount = createTransactionDto.Amount
    const data = await createTransaction.save();
    return {
      message:"transaction created well",
      data:data
    }
  }

  async findAll() {
    return await  Transaction.find();
  }

  
  async findOne(id: number) {
    return await Transaction.findOne(id);
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return await  Transaction.update(id, updateTransactionDto);
  }

  async remove(id: number) {
    return await Transaction.delete(id);
  }
}
