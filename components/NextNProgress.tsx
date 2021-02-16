/**
 * Adapted from https://github.com/apal21/nextjs-progressbar/blob/master/src/index.js
 *
 * Adds startDelayMs
 */

import Router from 'next/router';
import NProgress from 'nprogress';
import * as React from 'react';

export interface INextNProgressProps {
  color: string;
  height?: number;
  startPosition?: number;
  startDelayMs?: number;
  stopDelayMs?: number;
  options?: object;
}

export class NextNProgress extends React.Component<INextNProgressProps> {
  static defaultProps = {
    color: '#29D',
    startPosition: 0.3,
    startDelayMs: 0,
    stopDelayMs: 200,
    height: 3,
  };

  started = false;
  startTimer: NodeJS.Timeout | null = null;
  endTimer: NodeJS.Timeout | null = null;

  routeChangeStart = () => {
    if (this.startTimer) clearTimeout(this.startTimer);
    if (this.endTimer) clearTimeout(this.endTimer);
    this.startTimer = setTimeout(() => {
      this.started = true;
      NProgress.set(this.props.startPosition || 0);
      NProgress.start();
    }, this.props.startDelayMs);
  };

  routeChangeEnd = () => {
    clearTimeout(this.startTimer);
    clearTimeout(this.endTimer);
    if (!this.started) return;
    this.started = false;
    this.endTimer = setTimeout(() => {
      NProgress.done(true);
    }, this.props.stopDelayMs);
  };

  render() {
    const { color, height } = this.props;

    return (
      <style jsx global>{`
        #nprogress {
          pointer-events: none;
        }
        #nprogress .bar {
          background: ${color};
          position: fixed;
          z-index: 9999;
          top: 0;
          left: 0;
          width: 100%;
          height: ${height}px;
        }
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
          opacity: 1;
          -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
        }
        #nprogress .spinner {
          display: 'block';
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }
        #nprogress .spinner-icon {
          width: 18px;
          height: 18px;
          box-sizing: border-box;
          border: solid 2px transparent;
          border-top-color: ${color};
          border-left-color: ${color};
          border-radius: 50%;
          -webkit-animation: nprogresss-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
        }
        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }
        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }
        @-webkit-keyframes nprogress-spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @keyframes nprogress-spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    );
  }

  componentDidMount() {
    const { options } = this.props;

    if (options) {
      NProgress.configure(options);
    }

    Router.events.on('routeChangeStart', this.routeChangeStart);
    Router.events.on('routeChangeComplete', this.routeChangeEnd);
    Router.events.on('routeChangeError', this.routeChangeEnd);
  }
}
