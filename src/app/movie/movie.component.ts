import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Location } from "@angular/common";
import { FormBuilder } from "@angular/forms";
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

interface HeroNode {
  url: any;
  name: string;
  children?: HeroNode[];
}

const TREE_DATA: HeroNode[] = [
  {
    name: 'Ironman', url: '/IronMan',
        children: [
          {name: 'Mark I', url: '/marki'},
          {name: 'Mark II', url: '/markii'},
          {name: 'Mark III', url: '/home/home.component'},
          {name: 'Mark VIII: Silver Centurion', url: '/home/home.component'},
          {name: 'Mark V', url: '/home/home.component'},
          {name: 'Mark XVI: Sentient Armor', url: '/home/home.component'},
          {name: 'Mark XL: Shotgun', url: '/home/home.component'},
          {name: 'Mark XLIII: Stealth Suit V.3', url: '/home/home.component'},
          {name: 'Mark XXIX: Extremis', url: '/home/home.component'},
          {name: 'Mark XLI: Bones', url: '/home/home.component'},
          {name: 'Mark XXXVII: Bleeding Edge', url: '/home/home.component'},
          {name: 'Mark VII', url: '/home/home.component'},
          {name: 'Mark IX', url: '/home/home.component'},
          {name: 'Mark XXII: Thorbuster', url: '/home/home.component'},
          {name: 'Mark XLIV: Hulkbuster', url: '/home/home.component'},
          {name: 'Mark XLVI', url: '/home/home.component'},
          {name: 'Mark XLVII', url: '/home/home.component'},
          {name: 'Mark L', url: '/home/home.component'},
          {name: 'Mark LXXXV', url: '/home/home.component'},
        ]
  },
  {
    name: 'Spiderman', url: '/home/home.component'
  },
  {
    name: 'Thor', url: '/home/home.component'
  },
  {
    name: 'Hulk', url: '/home/home.component'
  },
  {
    name: 'Captain America', url: '/home/home.component'
  },
  
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

//Table
export interface PeriodicElement {
  name: string;
  position: number;
  year: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Blade', year: 1998},
  {position: 2, name: 'Blade II', year: 2002},
  {position: 3, name: 'Spider-man', year: 2002},
  {position: 4, name: 'Daredevil', year: 2003},
  {position: 5, name: 'Hulk', year: 2003},
  {position: 6, name: 'Spider-Man 2', year: 2004},
  {position: 7, name: 'Blade: Trinity', year: 2004},
  {position: 8, name: 'Elektra', year: 2005},
  {position: 9, name: 'Spider-Man 3', year: 2007},
  {position: 10, name: 'Iron Man', year: 2008},
  {position: 11, name: 'The Incredible Hulk', year: 2008},
  {position: 12, name: 'Iron Man 2', year: 2010},
  {position: 13, name: 'Thor', year: 2011},
  {position: 14, name: 'Captain America: The First Avenger', year: 2011},
  {position: 15, name: 'The Avengers', year: 2012},
  {position: 16, name: 'Iron Man 3', year: 2013},
  {position: 17, name: 'Thor: The Dark World', year: 2013},
  {position: 18, name: 'Captain America: The Winter Soldier', year: 2014},
  {position: 19, name: 'Guardians of the Galaxy', year: 2014},
  {position: 20, name: 'Avengers: Age of Ultron', year: 2015},
  {position: 21, name: 'Ant-Man', year: 2015},
  {position: 22, name: 'Captain America: Civil War', year: 2016},
  {position: 23, name: 'Doctor Strange', year: 2016},
  {position: 24, name: 'Guardians of the Galaxy Vol. 2', year: 2017},
  {position: 25, name: 'Spider-Man: Homecoming', year: 2017},
  {position: 26, name: 'Thor: Ragnarok', year: 2017},
  {position: 27, name: 'Black Panther', year: 2018},
  {position: 28, name: 'Avengers: Infinity War', year: 2018},
  {position: 29, name: 'Ant-Man and the Wasp', year: 2018},
  {position: 30, name: 'Captain Marvel', year: 2019},
  {position: 31, name: 'Avengers: Endgame', year: 2019},
  {position: 32, name: 'Spider-Man: Far From Home', year: 2019},
  {position: 33, name: 'Black Widow', year: 2020},
  {position: 34, name: 'The Eternals', year: 2021},
  {position: 35, name: 'Shang Chi and the Legend of Ten Rings', year: 2021},
  {position: 36, name: 'Doctor Strange in the Multiverse of Madness', year: 2021},
  {position: 37, name: 'Thor: Love and Thunder', year: 2022},
];

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  //Table
  displayedColumns: string[] = ['position', 'name', 'year'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  //Table
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    //Table
    this.dataSource.sort = this.sort;
  }

  //side-nav
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    private _transformer = (node: HeroNode, level: number) => {
      return {
        expandable: !!node.children && node.children.length > 0,
        name: node.name,
        level: level,
        url: node.url
      };
    }
  
    treeControl = new FlatTreeControl<ExampleFlatNode>(
        node => node.level, node => node.expandable);
  
    treeFlattener = new MatTreeFlattener(
        this._transformer, node => node.level, node => node.expandable, node => node.children);
  
    dataSources = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    constructor(private breakpointObserver: BreakpointObserver,
      private location: Location,
      private _formBuilder: FormBuilder) {
        this.dataSources.data = TREE_DATA;
      }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}