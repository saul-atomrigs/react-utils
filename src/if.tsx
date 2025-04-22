import React from 'react';

interface IfProps {
  condition: boolean;
  children: React.ReactNode;
}

/**
 * how to use:
 * <If condition={user.isLoggedIn}>
 *  <p>환영합니다, {user.name}님!</p>
 * </If>
 */

const If = ({ condition, children }: IfProps) => {
  return condition ? <>{children}</> : null;
};

export default If;
