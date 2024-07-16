import AvenirBlackUrl from 'assets/fonts/Avenir-Black.ttf';
import AvenirBookUrl from 'assets/fonts/Avenir-Book.ttf';
import AvenirMediumUrl from 'assets/fonts/Avenir-Medium.ttf';
import AvenirHeavyUrl from 'assets/fonts/Avenir-Heavy.ttf';

export const AvenirBlack = {
  fontFamily: 'Avenir-Black',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
      local('Avenir-Black'),
      local('Avenir-Black'),
      url(${AvenirBlackUrl}) format('ttf')
    `,
};

export const AvenirBook = {
  fontFamily: 'Avenir-Book',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
        local('Avenir-Book'),
        local('Avenir-Book'),
        url(${AvenirBookUrl}) format('ttf')
      `,
};

export const AvenirMedium = {
  fontFamily: 'Avenir-Medium',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 500,
  src: `
        local('Avenir-Medium'),
        local('Avenir-Medium'),
        url(${AvenirMediumUrl}) format('ttf')
      `,
};

export const AvenirHeavy = {
  fontFamily: 'Avenir-Heavy',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 500,
  src: `
        local('Avenir-Heavy'),
        local('Avenir-Heavy'),
        url(${AvenirHeavyUrl}) format('ttf')
      `,
};
