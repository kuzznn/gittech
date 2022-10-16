import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@enums';
import { Badge, Icon } from '@components';
import { PCPartSelectedContext } from '@context';

export const Header = (): JSX.Element => {
  const { listPartSelected } = useContext(PCPartSelectedContext);

  const totalQuantity = useMemo(() => {
    const calculateToTalQuantity = listPartSelected.reduce((prevQuantity) => {
      return prevQuantity + 1;
    }, 0);
    return calculateToTalQuantity;
  }, [listPartSelected]);

  return (
    <header className="shadow">
      <div className="px-3 py-2">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center">
            <h1 className="logo d-flex align-items-center my-2 me-auto">
              <span className="badge bg-secondary text-white rounded">
                <Icon name="pc-display" />
                PC Builder
              </span>
            </h1>
            <div className="my-2 my-md-0 position-relative">
              <Link className="text-light fs-1" to={ROUTES.CART}>
                <Icon name="bag-heart-fill" />
              </Link>
              <Badge
                content={totalQuantity}
                className="position-absolute top-0 start-50"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
