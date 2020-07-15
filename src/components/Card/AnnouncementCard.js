import React from 'react';
import PropTypes from 'utils/propTypes';

import { Card, CardHeader, CardBody, CardText, } from 'reactstrap';

// import Avatar from 'components/Avatar';

import classNames from 'classnames';

const AnnouncementCard = ({
  color,
  header,
  avatar,
  avatarSize,
  cta,
  servicenm,
  text,
  composition,
  frequency,
chemical,
title,
note,
  className,
  buttonProps,
  ...restProps
}) => {
  const bgColor = `bg-${color}`;
  const classes = classNames(bgColor, className);

  return (
    <Card inverse className={classes} {...restProps}>
      {header && typeof header === 'string' ? (
        <CardHeader className={bgColor}>{header}</CardHeader>
      ) : (
        header
      )}
      <CardBody className="d-flex flex-wrap flex-column align-items-center justify-content-center">
        {/* <Avatar size={avatarSize} src={avatar} /> */}
        <CardText >
          <strong   size={20}>{cta}</strong>
          
        </CardText>
        <CardText size={14}> {servicenm}</CardText>


        <CardText className="text-center" size={12}> {title}</CardText>

        <CardText className="text-center" size={12}>Composition: {composition}</CardText>
        <CardText className="text-center" size={12}>Chemical: {chemical}</CardText>

        <CardText className="text-center" size={12}> Frequency: {frequency}</CardText>
        <CardText className="text-center" size={12}> {note}</CardText>


       
{/* 
        <Button color="primary" {...buttonProps} /> */}
      </CardBody>
    </Card>
  );
};

AnnouncementCard.propTypes = {
  color: PropTypes.string,
  header: PropTypes.node,
  avatar: PropTypes.string,
  avatarSize: PropTypes.number,
  name: PropTypes.string,
  date: PropTypes.date,
  className: PropTypes.string,
  children: PropTypes.element,
};

AnnouncementCard.defaultProps = {
  color: 'gradient-secondary',
  avatarSize: 60,
};

export default AnnouncementCard;
