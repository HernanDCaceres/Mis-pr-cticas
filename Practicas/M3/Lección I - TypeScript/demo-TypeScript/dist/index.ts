// interface IAddress {
//     street: string,
//     city: string
// }
// interface Iuser {
//   name: string;
//   age: number;
//   email: string;
//   active: boolean;
//   address: IAddress
// }

// const usuario: Iuser = {
//   name: "Jorge Vega",
//   age: 31,
//   email: "projectmgrex@hotmail.com",
//   active: true,
//   address: {
//     street: "Fake Street",
//     city: "Bogotá"
//   }
// };

// const user = {
//     name: "Jorge Vega",
//     age: 31,
//     email: "projectmgrex@hotmail.com",
//     active: true,
//     address: {
//         street: "Fake Street 123",
//         city: "Bogotá"
//     }
// }

interface Song {
  title: string;
  artist: string;
  duration: number;
}
interface Podcast {
  title: string;
  host: string;
  episodes: number;
}
interface Audiobook {
  title: string;
  author: string;
  duration: number;
}

interface Playlist {
    name: string,
    playlist: (Song | Podcast | Audiobook) [],


}
