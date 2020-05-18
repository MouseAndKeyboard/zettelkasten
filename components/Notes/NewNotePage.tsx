import { Form, FormGroup, Label, Input, Button, Spinner } from 'reactstrap'
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns'
import { useState } from 'react'

const NewNotePage = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const [formFields, setFormFields] = useState<NewNoteFormFields>({
        note: '',
        tags: []
    })

    const closeError = () => setError('')

    const handleSubmit = async () => {
        setLoading(true)
        try {
            // post to api endpoint
            console.log(formFields)
        } catch ({ code, message }) {
            setError(message || 'Unexpected error')
        } finally {
            setLoading(false)
        }
    }

    const tagOptions: {[key: string]: Object}[] = [
        { id: 'graphtheory', tag: "graph theory" },
        { id: 'question', tag: "question" },
        { id: 'hub', tag: "hub" }
    ]

    const fields: object = { text: 'tag', value: 'id' }

    return (
    <div>


        <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Label for="noteArea">New Note</Label>
            <Input
                type="textarea"
                name="text"
                id="noteArea"
                value={formFields.note}
                onChange={e => setFormFields({
                    note: e.target.value, tags: formFields.tags
                })}
            />
        </FormGroup>

        <FormGroup>
            <Label for="tagsArea">Add Tags</Label>
           <MultiSelectComponent
        id="mtselement"
        dataSource={tagOptions}
        fields={fields}
        allowCustomValue={true} />


        </FormGroup>

        {
            loading ?
            <Button className="btn btn-primary" disabled>
                <Spinner animation="grow" variant="success" /> Sending...
            </Button> :
            <Button className="btn btn-primary" onClick={() => handleSubmit()}>Submit</Button>
        }
    </Form>
    </div>)
}

interface NewNoteFormFields {
    note: string,
    tags: string[]
}

export default NewNotePage
