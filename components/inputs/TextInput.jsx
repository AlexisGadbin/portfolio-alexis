function TextInput({ placeholder, value, onChange, required }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="rounded-md bg-primary-50 px-5 py-4 text-xl focus:outline-solid focus:outline-primary"
    />
  )
}

export default TextInput
