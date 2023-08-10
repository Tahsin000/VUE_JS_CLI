# The Vue Router

## <a>, <router-link>, and <router-view> in Vue.js:

| Feature        | `<a>`                   | `<router-link>`                          | `<router-view>`                                |
| -------------- | ----------------------- | ---------------------------------------- | ---------------------------------------------- |
| Purpose        | Hyperlink               | Navigation link with Vue Router          | Renders the matched component based on the URL |
| Usage          | Navigate between pages  | Navigate between pages using Vue Router  | Renders components within the layout           |
| Propagation    | Sends HTTP request      | Updates browser URL, triggers Vue Router | Displays matched component content             |
| Accessible Via | Can be used anywhere    | Must be used within a Vue template       | Must be used within a Vue template             |
| Navigation     | Full page reload        | Updates the URL, maintains state         | Renders components without full page reload    |
| Active Class   | Manually set using CSS  | Automatically applied with `to` prop     | -                                              |
| CSS Class      | -                       | `router-link-active` (default)           | -                                              |
| Customization  | Limited styling options | Customizable using `class` and `style`   | Customizable through Vue Router configuration  |
| Programmatic   | N/A                     | Can be used with `router.push`           | N/A                                            |
| Parameters     | Not directly supported  | Supports route parameters and query      | N/A                                            |
| Named Routes   | N/A                     | Supports named routes                    | N/A                                            |
