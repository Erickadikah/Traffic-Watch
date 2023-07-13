import React, { useEffect, useState } from 'react';
import { IconHeart } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  rem,
} from '@mantine/core';
import { ImLocation2 } from 'react-icons/im';
import { GiTrafficLightsOrange } from "react-icons/gi";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface BadgeCardProps {
  image: string;
  title: string;
  description: string;
  country: string;
  badges: {
    emoji: string;
    label: string;
  }[];
}

const Posts = () => {
  const [posts, setPosts] = useState<BadgeCardProps[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/posts/getPosts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts || []); // Save the retrieved posts in the state, handle undefined case
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { classes, theme } = useStyles();

  return (
    <>
      {posts.map((post) => (
        <Card
          sx={{ width: '100%', maxWidth: '400px', height: '50%', BackgroundColor: '#1E293B'}}
          withBorder
          radius="md"
          p="md"
          className={classes.card}
          key={post.title}
        >
          <Card.Section>
            <Image src={post.image} alt={post.title} style={{ maxWidth: '395px' }} height={180} />
          </Card.Section>

          <Card.Section className={classes.section} mt="md">
            <Group position="apart">
              <Text fz="sm" fw={500} className="flex gap-6">
                {post.location}
                <ImLocation2 style={{ fontSize: 16}}/>
              </Text>
              <Badge size="lg">{post.country}</Badge>
            </Group>
            <Text fz="sm" mt="xs">
              {/* {post.description} */}
            </Text>
          </Card.Section>
          <Card.Section className={classes.section}>
            <Text mt="sm" className={classes.label}>
              {post.description}
            </Text>
            <Group spacing={7} mt={5}>
              {post.badges &&
                post.badges.map((badge) => (
                  <Badge
                    color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
                    key={badge.label}
                    leftSection={badge.emoji}
                  >
                    {badge.label}
                  </Badge>
                ))}
            </Group>
          </Card.Section>
        </Card>
      ))}
    </>
  );
};

export default Posts;