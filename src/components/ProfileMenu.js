import React, { useState } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import ProfileHistory from './ProfileHistory';
import ProfileOverview from './ProfileOverview';
import ProfileStats from './ProfileStats';

export const ProfileMenu = () => {
  const [active, setActive] = useState('overview')
  const handleItemClick = (e, { name }) => switchActiveContent(name)

  function switchActiveContent(name) {
    setActive(name)
  }

  return (
    <Container>
      <Menu pointing secondary>
        <Menu.Item 
          name='overview' 
          active={'overview' === active} 
          onClick={handleItemClick}
        />

        <Menu.Item 
          name='match-history' 
          active={'match-history' === active} 
          onClick={handleItemClick}
        />

        <Menu.Item 
          name='stats' 
          active={'stats' === active} 
          onClick={handleItemClick}
        />
      </Menu>

      { 'overview' === active ? (
        <ProfileOverview />
      ) : null }
      
      { 'match-history' === active ? (
        <ProfileHistory />
      ) : null }

      { 'stats' === active ? (
        <ProfileStats />
      ) : null }
    </Container>
  )
}