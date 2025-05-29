"use client"

import * as React from "react"
import { OTPInput as OTPInputPrimitive } from "input-otp"

import { cn } from "@/lib/utils"

const OTPInput = React.forwardRef<
  React.ElementRef<typeof OTPInputPrimitive>,
  React.ComponentPropsWithoutRef<typeof OTPInputPrimitive>
>(({ className, ...props }, ref) => (
  <OTPInputPrimitive ref={ref} containerClassName={cn("flex items-center gap-2", className)} {...props} />
))
OTPInput.displayName = OTPInputPrimitive.displayName

export { OTPInput }

