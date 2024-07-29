export interface TrackType {
  id: string
  date: Date
  reps: number
  exercise: ExerciseType
}

export interface ExerciseType {
  id: string
  name: string
}