import React from 'react'
import styled from 'styled-components'

import { Heading, Paragraph } from './shared/Typography'
import {
  SectionContainer,
  ContentContainer,
  CardGrid,
} from './shared/Containers'
import ProjectCard from './ProjectCard'

import CardSurgeIcon from '../images/CardSurgeIcon.svg'
import SyntheticIcon from '../images/SyntheticIcon.svg'
import MoreIcon from '../images/MoreIcon.svg'
import EmojiZooIcon from '../images/EmojiZooIcon.svg'

const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Hero = () => (
  <SectionContainer id="projects">
    {/* <Image
      src={HeroLeftSideBar}
      style={{ position: 'absolute', left: 0 }}
      lighten
    /> */}
    <ContentContainer style={{ gridGap: 30 }} numColumns={1}>
      <Description>
        <Heading>Projects</Heading>
        <Paragraph size="xlarge" weight="bold">
          Some things I've built
        </Paragraph>
      </Description>
      <CardGrid>
        <ProjectCard
          icon={SyntheticIcon}
          title="Synthetic"
          desc="A Spotify powered, data-driven web app to discover new musics"
          link="https://synthetic.netlify.com"
        />
        <ProjectCard
          icon={CardSurgeIcon}
          title="Card Surge"
          desc="A playground for designing cards and drop shadows for user interfaces"
          link="https://card.surge.sh"
        />
        <ProjectCard
          icon={EmojiZooIcon}
          title="Emoji Zoo"
          desc="A Twitter bot sending out daily zoo scenes made of Ascii art and emojis "
          link="https://twitter.com/EmojiZoo_"
        />
        <ProjectCard
          icon={MoreIcon}
          title="More"
          desc="I’ve made all sorts of apps, bots, and microservices that live on my Github"
          link="https://github.com/gillkyle"
        />
      </CardGrid>
    </ContentContainer>
  </SectionContainer>
)

export default Hero
