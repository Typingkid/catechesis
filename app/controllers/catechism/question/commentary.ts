import { htmlSafe } from '@ember/template';
import Controller from '@ember/controller';

import type { CommentaryRouteModel } from 'catechism/routes/catechism/question/commentary';

export default class CommentaryController extends Controller {
  declare model: CommentaryRouteModel;

  htmlSafe = htmlSafe;
}