import { signIn } from "@/auth"
import { Button } from "./ui/button"
 
export function SignIn({provider}: {provider?: string}) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
        <Button className="">SignIn</Button>
      {/* <button type="submit">SignIn</button> */}
    </form>
  )
} 