import React, { useEffect, useState } from "react";
import { Container, VStack, Heading, Text, Box, Spinner, IconButton } from "@chakra-ui/react";
import { FaSync } from "react-icons/fa";

const mockFetchNews = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "AI Breakthrough in Healthcare",
          summary: "A new AI model has been developed to predict patient outcomes with unprecedented accuracy.",
          image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGhlYWx0aGNhcmV8ZW58MHx8fHwxNzE3NzQzMTI1fDA&ixlib=rb-4.0.3&q=80&w=1080",
        },
        {
          title: "AI in Finance",
          summary: "Financial institutions are increasingly adopting AI to enhance decision-making processes.",
          image: "https://images.unsplash.com/photo-1642386231408-5b06e67b17dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGZpbmFuY2V8ZW58MHx8fHwxNzE3NzQzMTI1fDA&ixlib=rb-4.0.3&q=80&w=1080",
        },
        {
          title: "AI and Climate Change",
          summary: "Researchers are using AI to model climate change scenarios and propose mitigation strategies.",
          image: "https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGNsaW1hdGUlMjBjaGFuZ2V8ZW58MHx8fHwxNzE3NzQzMTI2fDA&ixlib=rb-4.0.3&q=80&w=1080",
        },
      ]);
    }, 2000);
  });
};

const Index = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    setLoading(true);
    const newsData = await mockFetchNews();
    setNews(newsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          AI News Blog
        </Heading>
        <IconButton aria-label="Refresh News" icon={<FaSync />} size="lg" onClick={fetchNews} />
        {loading ? (
          <Spinner size="xl" />
        ) : (
          news.map((article, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
              <Heading as="h2" size="md">
                {article.title}
              </Heading>
              <Text mt={4}>{article.summary}</Text>
              <Box mt={4}>
                <Image src={article.image} alt={article.title} />
              </Box>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Index;
