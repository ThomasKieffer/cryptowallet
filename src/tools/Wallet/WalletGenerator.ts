import { ethers } from 'ethers';

export interface WalletInfo {
  seedPhrase: string;
  privateKey: string;
  address: string;
}

function generateWallet(mnemonic?: string): WalletInfo {
  try {
    
    const wallet = mnemonic ? ethers.Wallet.fromPhrase(mnemonic) : ethers.Wallet.createRandom();
    // const generatedMnemonic = wallet.mnemonic.phrase;
    // const privateKey = wallet.privateKey;
    // const address = wallet.address;
    if( wallet.mnemonic == null){
      throw new Error('Wallet mnemonic is null');
    }

    return {
      seedPhrase: wallet.mnemonic.phrase,
      privateKey: wallet.privateKey,
      address: wallet.address,
    };
  } catch (error) {
    console.error('Error generating wallet:', error);
    throw error;
  }
}

export default generateWallet;
