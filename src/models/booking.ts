export interface BookingInterface {
  bookingID: number,
  userName: string,
  userPicture: string,
  orderDate: Date | string,
  checkIn: Date | string,
  checkOut: Date | string,
  specialRequest: string,
  roomType: string,
  status: string
}