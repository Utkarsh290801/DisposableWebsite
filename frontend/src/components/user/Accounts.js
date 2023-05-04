import React, { useState } from "react";
import { motion } from "framer-motion";
import GooglePayButton from '@google-pay/button-react'
const Accounts = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
        </motion.button>
        <GooglePayButton
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId: "exampleGatewayMerchantId",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "12345678901234567890",
              merchantName: "Demo Merchant",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: "100.00",
              currencyCode: "USD",
              countryCode: "US",
            },
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log("load payment data", paymentRequest);
          }}
        />
      <a
          className="btn btn-link"
          target="_blank"
          href={"/planmanager/" + currentUser._id}
        >
          Visit Live Page
        </a>
    </div>
  );
};

export default Accounts;
