import React, { Component } from 'react';
import { Props, State } from './interfaces';
import { TextStyled } from './styled';

export class ErrorBoundary extends Component<Props, State> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <TextStyled>Что-то пошло не так</TextStyled>;
    }

    return <>{children}</>;
  }
}
