
import app from './src/app';
import sitemap  from 'express-sitemap-html'

sitemap.swagger('TODO App - API DOCS', app)

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});