import React from 'react';

export class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error('React error boundary', { error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong, check the console.</h1>;
    }

    return this.props.children;
  }
}
