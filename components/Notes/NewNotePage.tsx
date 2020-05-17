import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const NewNotePage = () => {
    <div>
    <Form>
        <FormGroup>
            <Label for="noteArea">New Note</Label>
            <Input type="textarea" name="text" id="noteArea" />
        </FormGroup>
        <Button>Submit</Button>
    </Form>
    </div>
}

export default NewNotePage
