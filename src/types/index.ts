export interface Currency {
    img: string;
    name: string;
    price: number;
    address: string;
  }
  
  export interface User {
    id: string;
    walletAddress: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    telegramId?: string;
    country?: string;
    profileImage?: string;
    referralCode: string;
    referals?: number;
  }
  
  export interface Transaction {
    _id: string;
    amount: number;
    token: string;
    transactionHash: string;
    buyer: User;
    createdAt: string;
  }
  
  export interface BuyFormValues {
    numberOfToken: string;
    amount: string;
    currency: Currency;
    isBonus: boolean;
    isReferral: string;
    referralLink: string;
  }
  