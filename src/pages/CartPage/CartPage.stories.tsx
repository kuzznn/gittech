import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter, Link } from 'react-router-dom';
import { CartPage } from '@pages';
import { ICartQuantity } from '@interfaces';
import { PC_PART_TYPES, ROUTES } from '@enums';
import { pcPartData } from '@constants';
import { Footer, Header, Icon, PCPart } from '@components';
import { calculateTotalPrice, filterPCPartByType } from '@helpers';

export default {
  title: 'PCBuilder/PCCartPage',
  component: CartPage,
  decorators: [
    () => {
      const listPartSelected = filterPCPartByType(
        pcPartData,
        PC_PART_TYPES.CASE,
      );

      const listPartInCart: ICartQuantity[] = [
        { productId: 25, quantity: 5 },
        { productId: 26, quantity: 1 },
        { productId: 27, quantity: 2 },
      ];

      const totalPrice = calculateTotalPrice({
        listPartSelected,
        listPartInCart,
      });

      return (
        <BrowserRouter>
          <Header />
          <div className="d-flex flex-column container">
            <div className="mb-5 mt-2">
              <Link to={ROUTES.BUILDER} className="text-light">
                <Icon name="chevron-left" />
                Back to PC Builder Page
              </Link>
            </div>
            <div className="d-flex flex-column gap-2 mb-3">
              {listPartSelected.map((pcPartSelected) => (
                <PCPart
                  key={pcPartSelected.id}
                  pcPart={pcPartSelected}
                  status={true}
                  isInCartPage={true}
                  handleRemovePCItem={() => null}
                  handleIncrease={() => null}
                  handleDecrease={() => null}
                />
              ))}
            </div>
            <div className=" d-flex flex-column text-light ms-auto fs-3 fw-bold">
              Total: {totalPrice}
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      );
    },
  ],
} as ComponentMeta<typeof CartPage>;

const Template: ComponentStory<typeof CartPage> = () => <CartPage />;

export const Sample = Template.bind({});
