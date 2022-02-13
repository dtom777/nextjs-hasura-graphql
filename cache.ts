import { makeVar } from '@apollo/client'
interface Task {
  title: string
}

// Task[] ・・・TaskのArray型
// ([]) ・・・初期値
export const todoVar = makeVar<Task[]>([])
