import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Input, Textarea,css, useTheme } from "@nextui-org/react";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("mjvdgypr");
  const {theme}=useTheme()
  if (state.succeeded) {
    return <h3 style={{marginTop:"20px"}}>Thanks for Contacting Me!</h3>;
  }
  return (
    <div style={{ marginTop: "50px" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Input
            css={{
              border: "1px solid",
              borderColor: theme.colors.neutral.value,
            }}
            labelPlaceholder="Name"
            name="name"
          />
          <Input
            labelPlaceholder="Email"
            id="email"
            type="email"
            name="email"
            css={{
              border: "1px solid",
              borderColor: theme.colors.neutral.value,
            }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div style={{ marginTop: "30px" }}>
          <Textarea
            size="lg"
            id="message"
            labelPlaceholder="Message"
            name="message"
            css={{
              border: "1px solid",
              borderColor: theme.colors.neutral.value,
            }}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            ghost
            color="gradient"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
