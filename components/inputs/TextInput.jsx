function TextInput({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="rounded-md bg-primary-50 px-5 py-4 text-xl focus:outline focus:outline-primary"
    />
  )
}

export default TextInput
