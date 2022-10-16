import React from 'react';
import { Icon } from '@components';

export const Footer = (): JSX.Element => {
  return (
    <div className="bg-secondary shadow-sm footer">
      <div className="container py-3">
        <span className="mb-3 fs-5 badge bg-light text-secondary rounded">
          <i className="bi bi-pc-display"></i>
          PC Builder
        </span>
        <p className="text-light">
          PC Builder and the PC Builder logo are registered patents and
          trademarks of PC Builder. All other names, brands, products or
          services are trademarks or registered trademarks of their respective
          owners.
        </p>
        <div className="d-flex contact">
          <div className="mb-1 me-auto">
            <div className="d-flex align-items-center gap-1 ">
              <i className="bi bi-envelope-fill text-light"></i>
              <a
                className="text-decoration-none text-light"
                href="mailto:abc@gmail.com"
              >
                abc@gmail.com
              </a>
            </div>
            <div className="d-flex align-items-center gap-1 ">
              <i className="bi bi-telephone-fill text-light"></i>
              <a
                className="text-decoration-none text-light"
                href="tel:0123456789"
              >
                0123456789
              </a>
            </div>
          </div>
          <div className="px-0 d-flex flex-direction-row align-items-center gap-2">
            <a
              className="text-decoration-none text-secondary fs-3 bg-light social-icon d-flex justify-content-center align-items-center"
              href="#"
            >
              <Icon name={'facebook scale'} />
            </a>
            <a
              className="text-decoration-none text-secondary fs-3 bg-light social-icon d-flex justify-content-center align-items-center"
              href="#"
            >
              <Icon name={'skype scale'} />
            </a>
            <a
              className="text-decoration-none text-secondary fs-3 bg-light social-icon d-flex justify-content-center align-items-center"
              href="#"
            >
              <Icon name={'twitter scale'} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-2 text-secondary bg-light">
        &#169; Copyright 2022-2023 by PC Builder. All Rights Reserved.
      </div>
    </div>
  );
};
