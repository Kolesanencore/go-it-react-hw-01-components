import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import React from 'react';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <img src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
      <span className={isOnline ? css.true : css.false}></span>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
