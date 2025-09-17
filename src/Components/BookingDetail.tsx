// import DatePickerValue from "./DatePicker";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// export default function BookingDetails() {
//   return (
//     <div className="max-w-4xl mx-auto p-6 space-y-8">
//       <h1 className="text-3xl font-bold text-center">Booking Details</h1>

//       {/* Dates */}
//       <Card>
//         <CardContent className="p-6 grid md:grid-cols-2 gap-6">
//           <div>
//             <Label className="text-lg font-medium mb-2 block">Check In</Label>
//             <DatePickerValue />
//           </div>

//           <div>
//             <Label className="text-lg font-medium mb-2 block">Check Out</Label>
//             <DatePickerValue />
//           </div>
//         </CardContent>
//       </Card>

//       {/* Guests & Room Type */}
//       <Card>
//         <CardContent className="p-6 grid md:grid-cols-2 gap-6">
//           <div>
//             <Label className="text-lg font-medium mb-2 block">Number of Guests</Label>
//             <Input type="number" placeholder="Adults" />
//           </div>

//           <div>
//             <Label className="text-lg font-medium mb-2 block">Room Type</Label>
//             <Select defaultValue="Deluxe">
//               <SelectTrigger>
//                 <SelectValue placeholder="Select Room Type" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="Deluxe">Deluxe</SelectItem>
//                 <SelectItem value="Premier">Premier</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Guest Info */}
//       <Card>
//         <CardContent className="p-6 space-y-4">
//           <form className="grid md:grid-cols-2 gap-4">
//             <Input type="text" placeholder="First Name" />
//             <Input type="text" placeholder="Last Name" />
//             <Input type="email" placeholder="Email" />
//             <Input type="tel" placeholder="Phone Number" />

//             <div className="md:col-span-2 flex justify-center mt-4">
//               <Button size="lg" className="w-full md:w-1/2">
//                 Book Now
//               </Button>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
