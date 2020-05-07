import {
    select as d3_select
} from 'd3-selection';

// Pass `which` object of the form:
// {
//   key: 'string',     // required
//   value: 'string'    // optional
// }
//   -or-
// {
//   rtype: 'string'    // relation type  (e.g. 'multipolygon')
// }
//   -or-
// {
//   qid: 'string'      // brand wikidata  (e.g. 'Q37158')
// }
//
export function uiTagReference(hint) {
    var tagReference = {};

    var _body = d3_select(null);
    var _showing;

    tagReference.body = function(selection) {
        var data = hint ? [hint] : [];
        _body = selection.selectAll('.tag-reference-body')
            .data(data, function(d) { return d; });

        _body.exit()
            .remove();

        var enter = _body.enter()
            .append('div')
            .attr('class', 'tag-reference-body expanded')
            .style('max-height', 'auto')
            .style('opacity', '1');


        enter
            .append('p')
            .attr('class', 'tag-reference-description')
            .text(hint);

        _body = enter.merge(_body);
    };


    tagReference.showing = function(val) {
        if (!arguments.length) return _showing;
        _showing = val;
        return tagReference;
    };


    return tagReference;
}
