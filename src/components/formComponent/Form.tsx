// "use client";
// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "../ui/button";
// import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"; // Import additional components for Select

// // Define the type for the props
// interface FormProps {
//   isFormData: boolean;
//   onFormSubmit?: (data: {
//     email: string;
//     name: string;
//     rollNo: string;
//     universityRoll: string;
//     branch: string;
//   }) => void; // Optional callback prop
// }

// export function Form({ isFormData, onFormSubmit }: FormProps) {
//   // Define state for form fields and error handling
//   const [formData, setFormData] = useState({
//     email: "",
//     name: "",
//     rollNo: "",
//     universityRoll: "",
//     branch: "CSE", // Default branch
//     phone:"",
//   });
//   const [errors, setErrors] = useState({
//     branch: "", // Error message for branch
//   });

//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   // Handle branch selection and reset errors if any
//   const handleBranchChange = (branch: string) => {
//     setFormData({
//       ...formData,
//       branch,
//     });
//     setErrors({
//       ...errors,
//       branch: "", // Clear error when a valid selection is made
//     });
//   };

//   // Validate form and show error if branch is not selected
//   const validateForm = () => {
//     let valid = true;
//     const newErrors = { branch: "" };

//     if (!formData.branch) {
//       newErrors.branch = "Please select a branch.";
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault(); // Prevent default form submission behavior

//     if (validateForm()) {
//       if (isFormData && onFormSubmit) {
//         onFormSubmit(formData); // Send form data to parent component
//       } else {
//         console.log(formData); // Log form data
//       }
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-4 items-center justify-center my-auto w-full max-w-lg bg-gray-50 p-6 rounded-md shadow-lg mx-auto"
//     >
//       <h1 className="text-blue-900 font-bold">DevDays:Web Edition</h1>
//       <div className="grid w-full items-center gap-2">
//         <Label htmlFor="email" className="font-medium text-gray-800">Email</Label>
//         <Input
//           type="email"
//           id="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="text-gray-800 border-gray-500"
//         />
//       </div>

//       <div className="grid w-full items-center gap-2">
//         <Label htmlFor="name" className="font-medium text-gray-800">Name</Label>
//         <Input
//           type="text"
//           id="name"
//           placeholder="Divyanshu Sharma"
//           value={formData.name}
//           onChange={handleChange}
//            className="text-gray-800 border-gray-500"
//         />
//       </div>

//       <div className="grid w-full items-center gap-2">
//         <Label htmlFor="rollNo" className="font-medium text-gray-800">College Roll No</Label>
//         <Input
//           type="text"
//           id="rollNo"
//           placeholder="22/285"
//           value={formData.rollNo}
//           onChange={handleChange}
//            className="text-gray-800 border-gray-500"
//         />
//       </div>

//       <div className="grid w-full items-center gap-2">
//         <Label htmlFor="phone" className="font-medium text-gray-800">Mobile Number</Label>
//         <Input
//           type="number"
//           id="phone"
//           placeholder="9999999999"
//           value={formData.phone}
//           onChange={handleChange}
//            className="text-gray-800 border-gray-500"
//         />
//       </div>

//       <div className="grid w-full items-center gap-2">
//         <Label htmlFor="universityRoll" className="font-medium text-gray-800">University Roll No</Label>
//         <Input
//           type="text"
//           id="universityRoll"
//           placeholder="22EUCCS033"
//           value={formData.universityRoll}
//           onChange={handleChange}
//            className="text-gray-800 border-gray-500"
//         />
//       </div>

//       <div className="grid w-full items-center gap-2">
//         <Label htmlFor="branch" className="font-medium text-gray-800">Branch</Label>
//         {errors.branch && <p className="text-red-600">{errors.branch}</p>}
//         <Select onValueChange={handleBranchChange} value={formData.branch}>
//           <SelectTrigger className="w-full text-gray-800 border-gray-500">
//             <span>{formData.branch || "Select Branch"}</span>
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="CSE">Computer Science</SelectItem>
//             <SelectItem value="ECE">Electronics and Communication</SelectItem>
//             <SelectItem value="EEE">Electrical and Electronics</SelectItem>
//             <SelectItem value="ME">Mechanical</SelectItem>
//             <SelectItem value="CE">Civil</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       <Button
//         type="submit"
//         variant="outline"
//         className="text-white bg-blue-600 hover:bg-blue-700 w-full max-w-sm"
//       >
//         Submit
//       </Button>
//     </form>
//   );
// }

  // "use client";
  // import { useState } from "react";
  // import { Input } from "@/components/ui/input";
  // import { Label } from "@/components/ui/label";
  // import { Button } from "../ui/button";
  // import {
  //   Select,
  //   SelectTrigger,
  //   SelectContent,
  //   SelectItem,
  // } from "@/components/ui/select";
  // import toast, { Toaster } from "react-hot-toast";
  // import axios from "axios";

  // interface FormProps {
  //   isFormData: boolean;
  //   onFormSubmit?: (data: {
  //     email: string;
  //     name: string;
  //     rollNo: string;
  //     universityRoll: string;
  //     branch: string;
  //     year: string;
  //     phone: string;
  //   }) => void;
  // }

  // export function Form({ isFormData, onFormSubmit }: FormProps) {
  //   const [formData, setFormData] = useState({
  //     email: "",
  //     name: "",
  //     rollNo: "",
  //     universityRoll: "",
  //     branch: "CSE",
  //     year: "I", // Default year
  //     phone: "",
  //   });

  //   const [errors, setErrors] = useState({
  //     branch: "",
  //     year: "",
  //   });

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.id]: e.target.value,
  //     });
  //   };

  //   const handleBranchChange = (branch: string) => {
  //     setFormData({
  //       ...formData,
  //       branch,
  //     });
  //     setErrors({
  //       ...errors,
  //       branch: "",
  //     });
  //   };

  //   const handleYearChange = (year: string) => {
  //     setFormData({
  //       ...formData,
  //       year,
  //     });
  //     setErrors({
  //       ...errors,
  //       year: "",
  //     });
  //   };

  //   const validateForm = () => {
  //     let valid = true;
  //     const newErrors = { branch: "", year: "" };
    
  //     if (!formData.branch) {
  //       newErrors.branch = "Please select a branch.";
  //       valid = false;
  //     }
  //     if (!formData.year) {
  //       newErrors.year = "Please select a year.";
  //       valid = false;
  //     }
    
  //     setErrors(newErrors);
  //     console.log("Validation errors:", newErrors);  // Check the error log
  //     return valid;
  //   };
    
  //   const [isSubmitting, setIsSubmitting] = useState(false);
  //   const [message, setMessage] = useState("");
  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();
      
  //     console.log("Form submitted");
    
  //     if (validateForm()) {
  //       setIsSubmitting(true);
    
  //       // Log the form data to ensure it's correct before sending
  //       console.log("Form data to submit:", formData); // Log form data
    
      
  //         try {
  //           const response = await axios.post("/api/FormSubmit", formData, {
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           });
    
  //           if (response) {
  //             toast.success("Form submitted successfully!");
  //           } else {
  //             toast.error("Failed to submit form. Please try again.");
  //           }
  //         } catch (error) {
  //           console.error("Error during submission:", error);
  //           toast.error("An error occurred. Please try again.");
  //         } finally {
  //           setIsSubmitting(false);
  //         }
      
  //     }
  //   };
    

  //   return (
  //     <form
  //       onSubmit={handleSubmit}
  //       className="flex flex-col gap-4 items-center justify-center my-auto w-full max-w-lg bg-gray-50 p-6 rounded-md shadow-lg mx-auto"
  //     >
  //       <Toaster />
  //       <h1 className="text-blue-900 font-bold">DevDays: Web Edition</h1>

  //       <div className="grid w-full items-center gap-2">
  //         <Label htmlFor="email" className="font-medium text-gray-800">
  //           Email
  //         </Label>
  //         <Input
  //           type="email"
  //           id="email"
  //           placeholder="Email"
  //           value={formData.email}
  //           onChange={handleChange}
  //           className="text-gray-800 border-gray-500"
  //         />
  //       </div>

  //       <div className="grid w-full items-center gap-2">
  //         <Label htmlFor="name" className="font-medium text-gray-800">
  //           Name
  //         </Label>
  //         <Input
  //           type="text"
  //           id="name"
  //           placeholder="Divyanshu Sharma"
  //           value={formData.name}
  //           onChange={handleChange}
  //           className="text-gray-800 border-gray-500"
  //         />
  //       </div>

  //       <div className="grid w-full items-center gap-2">
  //         <Label htmlFor="rollNo" className="font-medium text-gray-800">
  //           College Roll No
  //         </Label>
  //         <Input
  //           type="text"
  //           id="rollNo"
  //           placeholder="22/285"
  //           value={formData.rollNo}
  //           onChange={handleChange}
  //           className="text-gray-800 border-gray-500"
  //         />
  //       </div>

  //       <div className="grid w-full items-center gap-2">
  //         <Label htmlFor="phone" className="font-medium text-gray-800">
  //           Mobile Number
  //         </Label>
  //         <Input
  //           type="number"
  //           id="phone"
  //           placeholder="9999999999"
  //           value={formData.phone}
  //           onChange={handleChange}
  //           className="text-gray-800 border-gray-500"
  //         />
  //       </div>

  //       <div className="grid w-full items-center gap-2">
  //         <Label htmlFor="universityRoll" className="font-medium text-gray-800">
  //           University Roll No
  //         </Label>
  //         <Input
  //           type="text"
  //           id="universityRoll"
  //           placeholder="22EUCCS033"
  //           value={formData.universityRoll}
  //           onChange={handleChange}
  //           className="text-gray-800 border-gray-500"
  //         />
  //       </div>

  //       <div className="grid w-full items-center gap-2">
  //         <Label htmlFor="branch" className="font-medium text-gray-800">
  //           Branch
  //         </Label>
  //         {errors.branch && <p className="text-red-600">{errors.branch}</p>}
  //         <Select onValueChange={handleBranchChange} value={formData.branch}>
  //           <SelectTrigger className="w-full text-gray-800 border-gray-500">
  //             <span>{formData.branch || "Select Branch"}</span>
  //           </SelectTrigger>
  //           <SelectContent>
  //             <SelectItem value="CSE">Computer Science</SelectItem>
  //             <SelectItem value="ECE">Electronics and Communication</SelectItem>
  //             <SelectItem value="EE">Electrical and Electronics</SelectItem>
  //             <SelectItem value="ME">Mechanical</SelectItem>
  //             <SelectItem value="CE">Civil</SelectItem>
  //             <SelectItem value="P&I">P&I</SelectItem>
  //             <SelectItem value="EIC">EIC</SelectItem>
  //             <SelectItem value="AE">AE</SelectItem>
  //             <SelectItem value="OTHER">OTHER</SelectItem>
  //           </SelectContent>
  //         </Select>
  //       </div>

  //       <div className="grid w-full items-center gap-2">
  //         <Label htmlFor="year" className="font-medium text-gray-800">
  //           Year
  //         </Label>
  //         {errors.year && <p className="text-red-600">{errors.year}</p>}
  //         <Select onValueChange={handleYearChange} value={formData.year}>
  //           <SelectTrigger className="w-full text-gray-800 border-gray-500">
  //             <span>{formData.year || "Select Year"}</span>
  //           </SelectTrigger>
  //           <SelectContent>
  //             <SelectItem value="I">I</SelectItem>
  //             <SelectItem value="II">II</SelectItem>
  //             <SelectItem value="III">III</SelectItem>
  //             <SelectItem value="IV">IV</SelectItem>
  //           </SelectContent>
  //         </Select>
  //       </div>

  //       <Button
  //         type="submit"
  //         variant="outline"
  //         disabled={isSubmitting}
  //         className="text-white bg-blue-600 hover:bg-blue-700 w-full max-w-sm"
  //       >
  //         {isSubmitting ? "Submitting..." : "Submit"}
  //       </Button>
  //       {message && <p>{message}</p>}
  //     </form>
  //   );
  // }



  "use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

interface FormProps {
  isFormData: boolean;
  onFormSubmit?: (data: {
    email: string;
    name: string;
    rollNo: string;
    universityRoll: string;
    branch: string;
    year: string;
    phone: string;
  }) => void;
}

export function Form({ isFormData, onFormSubmit }: FormProps) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    rollNo: "",
    universityRoll: "",
    branch: "CSE",
    year: "I", // Default year
    phone: "",
  });


  const [errors, setErrors] = useState({
    branch: "",
    year: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleBranchChange = (branch: string) => {
    setFormData({
      ...formData,
      branch,
    });
    setErrors({
      ...errors,
      branch: "",
    });
  };

  const handleYearChange = (year: string) => {
    setFormData({
      ...formData,
      year,
    });
    setErrors({
      ...errors,
      year: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { branch: "", year: "" };
  
    if (!formData.branch) {
      newErrors.branch = "Please select a branch.";
      valid = false;
    }
    if (!formData.year) {
      newErrors.year = "Please select a year.";
      valid = false;
    }
  
    setErrors(newErrors);
    console.log("Validation errors:", newErrors);  // Check the error log
    return valid;
  };
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submitted");
  
    if (validateForm()) {
      setIsSubmitting(true);
  
      // Log the form data to ensure it's correct before sending
      console.log("Form data to submit:", formData); // Log form data
  
    
        try {
          const response = await axios.post("/api/FormSubmit", formData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          if (response) {
            toast.success("Form submitted successfully!");
            if (isFormData && onFormSubmit) {
                  onFormSubmit(formData); // Send form data to parent component
                 } else {
                   console.log(formData); // Log form data
                    }
          } else {
            toast.error("Failed to submit form. Please try again.");
          }
        } catch (error) {
          console.error("Error during submission:", error);
          toast.error("An error occurred. Please try again.");
        } finally {
          setIsSubmitting(false);
        }
    
    }
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center justify-center my-auto w-full max-w-lg bg-gray-50 p-6 rounded-md shadow-lg mx-auto"
    >
      <Toaster />
      <h1 className="text-blue-900 font-bold">DevDays: Web Edition</h1>

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="email" className="font-medium text-gray-800">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="text-gray-800 border-gray-500"
        />
      </div>

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="name" className="font-medium text-gray-800">
          Name
        </Label>
        <Input
          type="text"
          id="name"
          placeholder="Divyanshu Sharma"
          value={formData.name}
          onChange={handleChange}
          className="text-gray-800 border-gray-500"
        />
      </div>

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="rollNo" className="font-medium text-gray-800">
          College Roll No
        </Label>
        <Input
          type="text"
          id="rollNo"
          placeholder="22/285"
          value={formData.rollNo}
          onChange={handleChange}
          className="text-gray-800 border-gray-500"
        />
      </div>

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="phone" className="font-medium text-gray-800">
          Mobile Number
        </Label>
        <Input
          type="number"
          id="phone"
          placeholder="9999999999"
          value={formData.phone}
          onChange={handleChange}
          className="text-gray-800 border-gray-500"
        />
      </div>

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="universityRoll" className="font-medium text-gray-800">
          University Roll No
        </Label>
        <Input
          type="text"
          id="universityRoll"
          placeholder="22EUCCS033"
          value={formData.universityRoll}
          onChange={handleChange}
          className="text-gray-800 border-gray-500"
        />
      </div>

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="branch" className="font-medium text-gray-800">
          Branch
        </Label>
        {errors.branch && <p className="text-red-600">{errors.branch}</p>}
        <Select onValueChange={handleBranchChange} value={formData.branch}>
          <SelectTrigger className="w-full text-gray-800 border-gray-500">
            <span>{formData.branch || "Select Branch"}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CSE">Computer Science</SelectItem>
            <SelectItem value="ECE">Electronics and Communication</SelectItem>
            <SelectItem value="EE">Electrical and Electronics</SelectItem>
            <SelectItem value="ME">Mechanical</SelectItem>
            <SelectItem value="CE">Civil</SelectItem>
            <SelectItem value="P&I">P&I</SelectItem>
            <SelectItem value="EIC">EIC</SelectItem>
            <SelectItem value="AE">AE</SelectItem>
            <SelectItem value="OTHER">OTHER</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="year" className="font-medium text-gray-800">
          Year
        </Label>
        {errors.year && <p className="text-red-600">{errors.year}</p>}
        <Select onValueChange={handleYearChange} value={formData.year}>
          <SelectTrigger className="w-full text-gray-800 border-gray-500">
            <span>{formData.year || "Select Year"}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="I">I</SelectItem>
            <SelectItem value="II">II</SelectItem>
            <SelectItem value="III">III</SelectItem>
            <SelectItem value="IV">IV</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        variant="outline"
        disabled={isSubmitting}
        className="text-white bg-blue-600 hover:bg-blue-700 w-full max-w-sm"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
      {message && <p>{message}</p>}
    </form>
  );
}
