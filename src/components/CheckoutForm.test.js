import { MutationObserver } from "mutationobserver-shim";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText('Checkout Form');
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)
    const fName = screen.getByLabelText("First Name:")
    const lName = screen.getByLabelText("Last Name:")
    const address = screen.getByLabelText("Address:")
    const city = screen.getByLabelText("City:")
    const state = screen.getByLabelText("State:")
    const zip = screen.getByLabelText("Zip:")
    userEvent.type(fName, 'vaibhavi')
    userEvent.type(lName, 'balar')
    userEvent.type(address, '2651 156th Ave')
    userEvent.type(city, 'redmond')
    userEvent.type(state, 'Washington')
    userEvent.type(zip, '98052')
    const checkoutButton = screen.getByRole('button')
    userEvent.click(checkoutButton);

    await waitFor(()=>{
    const successMessage = screen.queryByTestId('successMessage').textContent
    expect(successMessage).toEqual('You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to:vaibhavi balar2651 156th Averedmond, Washington 98052')
    })
    

});
