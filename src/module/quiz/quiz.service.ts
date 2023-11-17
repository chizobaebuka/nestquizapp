import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  getAllQuiz() {
    return [1, 2, 3];
  }

  createQuiz() {
    return 'quiz created';
  }
}
