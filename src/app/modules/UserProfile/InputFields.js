const personalInfoFields = [
  {
    fieldName: "email",
    label: "Your Email Address",
    placeholder: "Email",
    errorMsg: "Enter a valid email",
    methods: methods
  },
  {
    fieldName: "displayName",
    label: "Display Name",
    placeholder: "Full Name",
    errorMsg: "Display Name is required",
    methods: methods
  },
  {
    fieldName: "sex",
    label: "Your Gender",
    placeholder: "Gender",
    errorMsg: "",
    methods: methods,
    isSelect: true,
    selectOptions: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "others", label: "Others" },
      { value: "preferNot", label: "Prefer not to say" }
    ]
  }
];
