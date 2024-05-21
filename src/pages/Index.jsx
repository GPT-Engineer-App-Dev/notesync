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
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container centerContent maxW="container.md">
        <VStack spacing={6} width="100%">
          <Heading as="h1" size="2xl" color="teal.500">Note Taking App</Heading>
          <Input 
            placeholder="Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            bg="white"
            borderRadius="md"
            shadow="sm"
            _focus={{ shadow: "outline" }}
          />
          <Textarea 
            placeholder="Content" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            bg="white"
            borderRadius="md"
            shadow="sm"
            _focus={{ shadow: "outline" }}
          />
          <Button colorScheme="teal" onClick={addNote} size="lg">Add Note</Button>
          <SimpleGrid columns={[1, 2, 3]} spacing={6} width="100%">
            {notes.map((note, index) => (
              <Box 
                key={index} 
                p={5} 
                shadow="md" 
                borderWidth="1px" 
                borderRadius="md"
                bg="white"
                _hover={{ shadow: "lg" }}
              >
                <Heading as="h3" size="md" color="teal.600">{note.title}</Heading>
                <Text mt={4}>{note.content}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;