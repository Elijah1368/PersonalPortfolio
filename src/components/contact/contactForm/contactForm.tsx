//@ts-nocheck

import { useForm } from 'react-hook-form'
import styles from './contactForm.module.scss'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default function Form() {
  const { register, formState, handleSubmit } = useForm()
  const onSubmit = async data => {
    await sleep(2000)
    if (data.name !== 'elijah') {
      alert(JSON.stringify(data))
    }
  }

  console.log(formState.errors)

  return (
    <form className={styles.myForm} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.myLabel}>First name</label>
      <input
        className={styles.myInput}
        type='text'
        {...register('name', { required: true, maxLength: 80 })}
      />
      <label className={styles.myLabel}>Last name</label>
      <input
        className={styles.myInput}
        type='text'
        {...register('Last name', { required: true, maxLength: 100 })}
      />
      {formState.errors['Last name'] && (
        <p className={styles.errorMsg}>This field is required</p>
      )}
      <label className={styles.myLabel}>Email</label>
      <input
        className={styles.myInput}
        type='text'
        style={{
          borderColor: formState.errors.Email ? 'red' : '',
          borderWidth: '2px',
        }}
        {...register('Email', {
          required: true,
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      {formState.errors.Email && (
        <p className={styles.errorMsg}>This field is required</p>
      )}

      <input className={styles.submitButton} type='submit' />
    </form>
  )
}
