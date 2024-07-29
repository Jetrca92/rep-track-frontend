import { FC } from "react"
import { ExerciseType, TrackType } from "../models/track"
import { Form, FormLabel } from "react-bootstrap"
import { Controller } from "react-hook-form"
import { useTrackForm } from "../hooks/react-hook-form/useTrackForm"
import { exercises } from "../constants/routesConstants"


interface Props {
  defaultValues?: TrackType
}

const TrackForm: FC<Props> = ({ defaultValues }) => {
  const { handleSubmit, errors, control } = useTrackForm({ defaultValues })
  return (
    <>
      <Form>
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <Form.Group className="mb-3">
              <FormLabel htmlFor="date">Date</FormLabel>
              <input
                {...field}
                type="date"
                aria-label="Date"
                aria-describedby="date"
                className={
                  errors.date ? 'form-control is-invalid' : 'form-control'
                }
                value=''
              />
              {errors.date && (
                <div className="invalid-feedback text-danger">
                  {errors.date.message}
                </div>
              )}
            </Form.Group>
          )}
        />
        <Controller
          name="exercise"
          control={control}
          render={({ field }) => (
            <Form.Group className="mb-3">
            <FormLabel htmlFor="exercise">Exercise</FormLabel>
            <select
              {...field}
              className={
                errors.exercise ? 'form-control is-invalid' : 'form-control'
              }
              value={field.value.id}
            >
              {Object.values(exercises).map((exercise, index) => (
                <option key={index} value={exercise}>
                  {exercise}
                </option>
              ))}
            </select>
            {errors.exercise && (
              <div className="invalid-feedback text-danger">
                {errors.exercise.message}
              </div>
            )}
            </Form.Group>
          )}
        />
        <Controller
          control={control}
          name="reps"
          render={({ field }) => (
            <Form.Group className="mb-3">
              <FormLabel htmlFor="reps">Reps</FormLabel>
              <input
                {...field}
                type="number"
                aria-label="reps"
                aria-describedby="Reps"
                className={
                  errors.reps ? 'form-control is-invalid' : 'form-control'
                }
              />
              {errors.reps && (
                <div className="invalid-feedback text-danger">
                  {errors.reps.message}
                </div>
              )}
            </Form.Group>
          )}
        />
      

      <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </>
  )
}

export default TrackForm
