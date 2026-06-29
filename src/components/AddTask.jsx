"use client";
import { CirclePlus } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Description,
  ListBox,
  Select,
} from "@heroui/react";

const AddTask = ({ createATask }) => {
  return (
    <Modal>
      <Button variant="secondary">Add a Task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Add a Task</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={createATask} className="flex flex-col gap-4">
                  {/* Title Feild */}
                  <TextField
                    className="w-full"
                    name="title"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Title</Label>
                    <Input placeholder="Enter your Title" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="description"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Task Description</Label>
                    <Input placeholder="Enter your task description" />
                  </TextField>

                  {/* Status Fields */}
                  <Select name="status" className="w-full" placeholder="Select one" variant="secondary">
                    <Label>Status</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="progress" textValue="In Progress">
                          In Progress
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="todo" textValue="Todo">
                          Todo
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="completed" textValue="Completed">
                          Completed
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Priority Fields */}
                  <Select name="prority" className="w-full" placeholder="Select one" variant="secondary">
                    <Label>Priority</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="hight" textValue="High">
                          Hight
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="medium" textValue="Medium">
                          Medium
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="low" textValue="Low">
                          Low
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Assigned To */}
                  <TextField className="w-full" name="assginedTo" variant="secondary">
                    <Label>Assigned To</Label>
                    <Input placeholder="Task Assigned To"></Input>
                  </TextField>

                  <Modal.Footer>
                    <Button variant="secondary">Cancel</Button>
                    <Button type="submit">Submit Task</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default AddTask;
