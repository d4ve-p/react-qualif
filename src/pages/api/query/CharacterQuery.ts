import { gql } from '@apollo/client';

const RANK_CHARACTER = gql`query randomCharacter($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
          characters(sort: FAVOURITES_DESC) {
            id
            name {
              first
              middle
              last
              full
              native
              userPreferred
            }
            image {
              medium
              large
            }
            gender
            description
            dateOfBirth {
              year
              month
              day
            }
            age
            bloodType
            favourites
        }
      }
    }`

const FIND_CHARACTER_BY_NAME = gql`query FindCharacter($characterName: String) {
  Page(page: 1, perPage: 20) {
    characters(search: $characterName, sort: FAVOURITES_DESC) {
      id
      name {
        first
        middle
        last
        full
        native
        userPreferred
      }
      image {
        medium
        large
      }
      gender
      description
      dateOfBirth {
        year
        month
        day
      }
      age
      bloodType
      favourites
    }
  }
}`

const GET_CHARACTER_BY_ID = gql`query FindCharacter($characterID: Int) {
  Page(page: 1, perPage: 1) {
    characters(id: $characterID) {
      id
      name {
        first
        middle
        last
        full
        native
        userPreferred
      }
      image {
        medium
        large
      }
      gender
      description
      dateOfBirth {
        year
        month
        day
      }
      age
      bloodType
      favourites
    }
  }
}`;

export { RANK_CHARACTER };
export { FIND_CHARACTER_BY_NAME };
export { GET_CHARACTER_BY_ID };