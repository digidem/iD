iD.svg.Points = function(projection, context) {
    function markerPath(selection, klass) {
        selection
            .attr('class', klass)
            .attr('r', '12');
    }

    function sortY(a, b) {
        return b.loc[1] - a.loc[1];
    }

    function drawPoints(surface, points, filter) {
        points.sort(sortY);

        var groups = surface.select('.layer-hit').selectAll('g.point')
            .filter(filter)
            .data(points, iD.Entity.key);

        var group = groups.enter()
            .append('g')
            .attr('class', function(d) { return 'node point ' + d.id; })
            .order();

        group.append('circle')
            .call(markerPath, 'shadow');

        // group.append('circle')
        //     .call(markerPath, 'stroke');

        group.append('use')
          .attr('class', 'icon-shadow')
          .attr('transform', 'translate(-16, -16)')
          .attr('clip-path', 'url(#clip-square-32)')

        group.append('use')
            .attr('class', 'icon')
            .attr('transform', 'translate(-12, -12)')
            .attr('clip-path', 'url(#clip-square-24)');

        groups.attr('transform', iD.svg.PointTransform(projection))
            .call(iD.svg.TagClasses());

        // Selecting the following implicitly
        // sets the data (point entity) on the element
        groups.select('.shadow');
        groups.select('.stroke');
        groups.select('.icon')
            .attr('xlink:href', function(entity) {
                var preset = context.presets().match(entity, context.graph());
                return preset.icon ? '#maki-' + preset.icon + '-12' : '#maki-point-12';
            });
        groups.select('.icon-shadow')
            .attr('xlink:href', function(entity) {
                var preset = context.presets().match(entity, context.graph());
                return preset.icon ? '#maki-' + preset.icon + '-shadow-12' : '#maki-point-12';
            });

        groups.exit()
            .remove();
    }

    drawPoints.points = function(entities, limit) {
        var graph = context.graph(),
            points = [];

        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (entity.geometry(graph) === 'point') {
                points.push(entity);
                if (limit && points.length >= limit) break;
            }
        }

        return points;
    };

    return drawPoints;
};
