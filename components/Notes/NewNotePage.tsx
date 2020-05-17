import { Form, FormGroup, Label, Input, Button, Spinner } from 'reactstrap'
import { useState } from 'react'

const NewNotePage = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const closeError = () => setError('')

    const handleSubmit = async (values: {note: string, tags: string[]}) => {
        setLoading(true)
        const data = {
            note: values.note,
            tags: values.tags
        }

        try {
            // post to api endpoint

        } catch ({ code, message }) {
            setError(message || 'Unexpected error')
        } finally {
            setLoading(false)
        }

    }

    return (
    <div>
    <Form>
        <FormGroup>
            <Label for="noteArea">New Note</Label>
            <Input type="textarea" name="text" id="noteArea" />
        </FormGroup>
        {
            loading ?
            <Button className="btn btn-primary" disabled>
                <Spinner animation="grow" variant="success" /> Sending...
            </Button> :
            <Button className="btn btn-primary">Submit</Button>
        }
    </Form>
    </div>)
}

export default NewNotePage
