import { Container, Text, VStack, Heading, Input, Textarea, Button, Box, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (title.trim() && content.trim()) {
      setNotes([...notes, { title, content }]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Note Taking App</Heading>
        <Input 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <Textarea 
          placeholder="Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
        <Button colorScheme="teal" onClick={addNote}>Add Note</Button>
        <SimpleGrid columns={[1, 2, 3]} spacing={4} width="100%">
          {notes.map((note, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">{note.title}</Heading>
              <Text mt={4}>{note.content}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;