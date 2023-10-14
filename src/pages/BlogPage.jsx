import React from "react";
import MainLayout from "../layouts/MainLayout.jsx";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const blogPosts = [
  {
    title: "Blog Post 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio...",
  },
  {
    title: "Blog Post 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio...",
  },
  {
    title: "Blog Post 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio...",
  },
];

function BlogPage() {
  return (
    <MainLayout>
      <div className="m-3">
        <Typography variant="h3" align="center" gutterBottom>
          Shop Bird Cage: Caeva Blog
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph>
          Welcome to our blog where we share insights, tips, and news about bird
          cages and accessories. Explore our latest posts below.
        </Typography>
        {blogPosts.map((post, index) => (
          <Card key={index} style={{ marginBottom: "20px" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography color="text.secondary">{post.content}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Read More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </MainLayout>
  );
}

export default BlogPage;
