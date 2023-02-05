import React from 'react'

export const Button = (props: React.ComponentProps<'button'>) => <button {...props} />

export const Input = (props: React.ComponentProps<'input'>) => (
  <input
    className={`block border border-solid rounded border-slate-400 p-2 w-full`}
    {...props}
  />
)

export const Label = (props: React.ComponentProps<'label'>) => (
  <label className={`block font-bold pb-1 w-full`} {...props} />
)

export const FormItemWrapper = (props: React.ComponentProps<'div'>) => (
  <div className={`pb-4`} {...props} />
)

export const FormWrapper = (props: React.ComponentProps<'form'>) => (
  <form
    className={`border-2 border-solid rounded-xl border-slate-500 p-4 w-80`}
    {...props}
  />
)
