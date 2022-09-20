# Editor testing
Quick  test CKEditor5, it's plugins, their conflicts between and also which ones they require as a dependency.

## Installation
Made with yarn, so first intall the packages

```bash
yarn install
```

## Usage
Also made with vite for a best perfomance and hot live reload, to run it:
```bash
yarn dev
```

## Considerations
This is just a test so any better ideas are welcome. Just take it as a guide

### If you agre going to use the predefined builds
> Consider that you're not allowed to remove or add plugins, instead you will have to create your own build

### If you are intended to use real time collaboration
> It needs a side bar container and a presence list container for a better understanding,
> Needs cloud services plugin, channel id(name of the document thet people will be editing), the token and web socket url (these last two are required with premium subscription)

## License
[MIT](https://choosealicense.com/licenses/mit/)
