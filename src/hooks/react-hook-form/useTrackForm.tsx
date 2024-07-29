import { yupResolver } from '@hookform/resolvers/yup'
import { TrackType } from '../../models/track'
import { ExerciseType } from '../../models/track'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

export interface TrackFormFields {
  date: Date
  reps: number
  exercise: ExerciseType
}

interface Props {
  defaultValues?: TrackType
}

export const useTrackForm = ({ defaultValues }: Props) => {
  const TrackFormSchema = Yup.object().shape({
    date: Yup.date().required('Date is required'),
    reps: Yup.number().integer().min(1).required('Number of reps required'),
    exercise: Yup.object().shape({
      id: Yup.string().required('Exercise ID is required'),
      name: Yup.string().required('Exercise name is required'),
    }).required('Exercise is required'),
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      date: new Date(),
      reps: 0,
      exercise: { id: '', name: '' },
      ...defaultValues,
    },
    mode: 'onSubmit',
    resolver: yupResolver(TrackFormSchema),
  })

  return {
    handleSubmit,
    errors,
    control,
  }
}

export type TrackForm = ReturnType<
  typeof useTrackForm
>
